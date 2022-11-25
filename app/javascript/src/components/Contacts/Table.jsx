import React, { useState } from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Table as NeetoUITable } from "neetoui";

import { CONTACTS } from "./constants";

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState();

  return (
    <NeetoUITable
      rowSelection
      currentPageNumber={1}
      defaultPageSize={5}
      handlePageChange={() => {}}
      rowData={CONTACTS}
      selectedRowKeys={selectedRowKeys}
      columnData={[
        {
          dataIndex: "name",
          key: "name",
          render: name => (
            <div className="flex flex-row items-center">
              <Avatar className="mr-2" size="small" user={{ name }} />
              {name}
            </div>
          ),
          title: "NAME",
          width: 75,
        },
        {
          dataIndex: "email",
          key: "email",
          title: "EMAIL",
          width: 75,
        },
        {
          dataIndex: "created_at",
          key: "id",
          title: "CREATED AT",
          width: 75,
        },
        {
          dataIndex: "menu",
          key: "menu",
          title: "",
          render: () => <MenuHorizontal />,
          width: 75,
        },
      ]}
      onRowSelect={(selectedRowKeys, _) => {
        setSelectedRowKeys(selectedRowKeys);
      }}
    />
  );
};

export default Table;
