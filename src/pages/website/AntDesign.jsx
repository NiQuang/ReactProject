import React, { useState } from 'react';
import { Form, Input } from 'antd';

const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: 'Username is required!',
        },
      ]}
    >
      <Input />
    </Form.Item><Form.Item
      name="price"
      label="Price"
      rules={[
        {
          required: true,
          message: 'Price is required!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);

const AntDesign = () => {
  const [fields, setFields] = useState([]);
  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
    </>
  );
};

export default AntDesign;