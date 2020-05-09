const SLEEP_MILLISECONDS = 2000;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const mapUser = (obtainedUser) => {
    const fullName = `${obtainedUser.name.first} ${obtainedUser.name.last}`;
    return {
        fullName,
        fullNameUpperCase: fullName.toUpperCase(),
        fullAddress: `${obtainedUser.location.street.name} ${obtainedUser.location.street.number}, ${obtainedUser.location.state}, ${obtainedUser.location.country}`,
        allPhones: `${obtainedUser.phone} / ${obtainedUser.cell}`,
        ...obtainedUser
    };
}

const getListAsync = async (quantity) => {
    //To always emulate "long time" processing
    await sleep(SLEEP_MILLISECONDS);

    let response = await fetch(`https://randomuser.me/api/?results=${quantity}&nat=es&exc=login`)
        .then(res => res.json())
        .then((data) => data.results
            .map(user => mapUser(user))
        );

    return response;
};

const filterListByFullName = (completeList, fullNameFilter) => {
    const fullNameFilterUpper = fullNameFilter.toUpperCase();
    return completeList.filter(user => user.fullNameUpperCase.includes(fullNameFilterUpper));
}

export {
    getListAsync,
    filterListByFullName,
}