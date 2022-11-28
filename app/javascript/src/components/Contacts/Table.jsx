import React, { useState } from "react";

import { Alert, Avatar, Table as NeetoUITable, Toastr } from "neetoui";

import Dropdown from "components/Common/Dropdown";

import { CONTACTS } from "./constants";

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <>
      <NeetoUITable
        rowSelection
        currentPageNumber={currentPageNumber}
        defaultPageSize={5}
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
            key: "created_at",
            title: "CREATED AT",
            width: 75,
          },
          {
            dataIndex: "menu",
            key: "menu",
            title: "",
            render: () => <Dropdown setShowDeleteAlert={setShowDeleteAlert} />,
            width: 75,
          },
        ]}
        handlePageChange={pageNumber => {
          setCurrentPageNumber(pageNumber);
        }}
        onRowSelect={selectedRowKeys => {
          setSelectedRowKeys(selectedRowKeys);
        }}
      />
      <Alert
        isOpen={showDeleteAlert}
        message="Are you sure you want to delete the contact? This action cannot be undone."
        title="Delete Contact"
        onClose={() => setShowDeleteAlert(false)}
        onSubmit={() => {
          Toastr.success("Contact was deleted successfully");
          setShowDeleteAlert(false);
        }}
      />
    </>
  );
};

export default Table;
