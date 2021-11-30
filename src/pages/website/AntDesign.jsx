import React, { useState } from 'react';
import { render } from 'react-dom';
import { DatePicker, message, Alert, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const AntDesign = () => {
    const [date, setDate] = useState(null);
    const handleChange = value => {
      message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
      setDate(value);
    };
    return (
        <Row>
          <Col span={6}>col 6</Col>
          <Col span={18}>col 18</Col>
        </Row>
      );
};

export default AntDesign;
