import React, { Component } from "react";
import Axios from "axios";
import { Table } from "antd";
import "antd/dist/antd.css";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    Axios.get(
      "https://www.json-generator.com/api/json/get/cgqmjhLSjS?indent=2"
    ).then((res) => {
      this.setState({ users: res.data });
    });
  }
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",

        render: (name) => `${name.firstName} ${name.surName}`,
        width: "20%",

        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend", "ascend"],
      },

      {
        title: "CITY",
        dataIndex: "address",
        render: (item) => `${item.city} `,

        sorter: (a, b) => a.address.length - b.address.length,
      },
      {
        title: "COMPANY",
        dataIndex: "company",
        filterMultiple: false,

        sorter: (a, b) => a.company.length - b.company.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "PHONE",
        dataIndex: "phone",

        sorter: (a, b) => a.phone - b.phone,
      },
      {
        title: "AGE",
        dataIndex: "age",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "DATE",
        dataIndex: "registered",
        sorter: (a, b) => a.registered - b.registered,
      },
    ];
    const { users } = this.state;
    return (
      <div>
        <Table
          columns={columns}
          dataSource={users}
          size={"small"}
          rowKey="index"
          title={() => <h1>Users</h1>}
        />
      </div>
    );
  }
}
