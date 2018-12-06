import { Table, Input, Button, Icon } from 'antd';
import React from 'react'
import './index.css'
import connect from "react-redux/es/connect/connect";

class ChatContent extends React.Component {

    constructor(props) {
        super(props)
        console.log('======================================ChatContent constructor state is :' + JSON.stringify(this.props.chatContent))
        this.state = {
            searchText: '',
        };
    }

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    }

    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'message',
            key: 'Name',
            align: 'right',
            render: (text, record) => {
                const {position, headImage} = record
                return (
                    position === 'left' ? (
                        <div style={{textAlign: 'left'}}>
                            <img src={record.headImage} style={{paddingRight:10,height:40}} />{text}
                        </div>
                    ) : (
                        <div>
                            {text}<img src={record.headImage} style={{paddingLeft:10,height:40,}} />
                        </div>
                    )

                )
            }
          //   filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          //       <div className="custom-filter-dropdown">
          //           <Input
          //               ref={ele => this.searchInput = ele}
          //               placeholder="Search name"
          //               value={selectedKeys[0]}
          //               onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          //               onPressEnter={this.handleSearch(selectedKeys, confirm)}
          //           />
          //           <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
          //           <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
          //       </div>
          //   ),
          //   filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
          //   onFilter: (value, record) => record.message.toLowerCase().includes(value.toLowerCase()),
          //   onFilterDropdownVisibleChange: (visible) => {
          //       if (visible) {
          //           setTimeout(() => {
          //               this.searchInput.focus();
          //           });
          //       }
          //   },
          //   render: (text) => {
          //       const { searchText } = this.state;
          //       return searchText ? (
          //           <span>
          //   {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
          //       fragment.toLowerCase() === searchText.toLowerCase()
          //           ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
          //   ))}
          // </span>
          //       ) : text;
          //   },
        // }, {
        //     title: 'Age',
        //     dataIndex: 'message',
        //     key: 'Age',
        //     align: 'right',
        //     fixed: 'right',
        //     render: (text, record) => (
        //         <div>
        //             <img src={text} style={{padding:0,height:40,}} />
        //             {record.key}
        //         </div>
        //
        //     )
        // }, {
        //     title: 'Address',
        //     dataIndex: 'message',
        //     key: 'Address',
        //     filters: [{
        //         text: 'London',
        //         value: '11',
        //     }, {
        //         text: 'New York',
        //         value: '22',
        //     }],
        //     onFilter: (value, record) => record.message.indexOf(value) === 0,
        }];
        return <Table columns={columns} dataSource={this.props.chatContent.chatContentList} showHeader={false} pagination={false}/>;
    }
}

const Temp = connect(
    state => {
        console.log('======================================now message is :' + JSON.stringify(state))
        return state
    }
)(ChatContent)

export default () => (
    /*{<Layout >}*/
    <Temp />
    /*</Layout>*/
)
