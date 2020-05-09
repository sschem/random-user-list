import React, { Component } from 'react';
import { getListAsync as getUserListAsync, filterListByFullName } from '../api/userApi';
import Spinner from '../components/Spinner';
import UserList from '../components/UserList';
import UserFilter from '../components/UserFilter';
import UserDetail from '../components/UserDetail';

const USERS_QUANTITY = 20;

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingUsers: true,
            userList: [],
            filteredUserList: [],
            filterText: "",
            hasError: false,
            selectedUser: undefined
        }
    }

    mustShowFullList = () => {
        return this.state.filteredUserList.length === 0 && this.state.filterText.length === 0;
    }

    mustShowDetail = () => {
        return this.state.selectedUser !== undefined;
    }

    mustShowFilter = () => {
        return !this.state.isLoadingUsers && !this.state.hasError && !this.mustShowDetail();
    }

    componentDidMount() {
        this.initializeUserList();
    }

    render() {
        const { isLoadingUsers, userList, filteredUserList, filterText } = this.state;
        return (
            <div>
                <Spinner visible={isLoadingUsers} />
                <UserFilter
                    visible={this.mustShowFilter()}
                    onTextChange={this.filterUserList}
                    text={filterText}
                />
                <UserList
                    visible={!this.mustShowDetail()}
                    userList={this.mustShowFullList() ? userList : filteredUserList}
                    onUserSelected={(selectedUser) => this.setState({ selectedUser })}
                />
                <UserDetail
                    visible={this.mustShowDetail()}
                    user={this.state.selectedUser}
                    onBackPress={() => this.setState({ selectedUser: undefined })}
                />
            </div>
        );
    }

    initializeUserList = async () => {
        try {
            var userList = await getUserListAsync(USERS_QUANTITY);
            this.setState({ userList, isLoadingUsers: false });
        } catch (ex) {
            this.manageException(ex);
        }
    }

    filterUserList = (filterText) => {
        try {
            const filteredUserList = filterListByFullName(this.state.userList, filterText);
            this.setState({ filteredUserList, filterText });
        } catch (ex) {
            this.manageException(ex);
        }
    }

    manageException = (exception) => {
        this.setState({
            isLoadingUsers: false,
            userList: [],
            filteredUserList: [],
            filterText: '',
            hasError: true
        });
        console.error(exception);
    }
}

export default MainScreen;