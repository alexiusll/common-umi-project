/*
 * @Author: linkenzone
 * @Date: 2021-05-21 16:30:28
 * @Descripttion: Do not edit
 */
import React, { useState } from 'react';
import { useModel, useAccess, Access } from 'umi';
import { useIntl } from 'umi';
import { Breadcrumb, Card, Row, Col, DatePicker, Button } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import style from './index.less';

export default () => {
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');
  // 国际化配置
  const intl = useIntl();

  const access = useAccess(); // access 实例的成员: canReadFoo, canUpdateFoo, canDeleteFoo
  const foo = { status: 2 };

  const [count, setCount] = useState(1);

  return (
    <div className={style.main_body}>
      <Card>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
        <h2>示例页面</h2>
      </Card>

      <Row>
        <Col>
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col>
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col>
          <Card title="Default size card" extra={<a href="#">More</a>}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>

      <div>全局初始数据 --- {initialState?.userName}</div>

      <div>权限管理模块 --- {initialState?.userName}</div>
      <div>
        <Access accessible={access.canReadFoo} fallback={<div>Can not read foo content.</div>}>
          <div>Foo content.</div>
        </Access>
        <Access accessible={access.canUpdateFoo()} fallback={<div>Can not update foo.</div>}>
          <div>Update foo.</div>
        </Access>
        <Access accessible={access.canDeleteFoo(foo)} fallback={<div>Can not delete foo.</div>}>
          <div>Delete foo.</div>
        </Access>
      </div>

      <div>
        国际化测试 --- 当前语言为：
        {intl.formatMessage({
          id: 'navbar.lang',
        })}
      </div>

      <DatePicker></DatePicker>

      <div>
        useState：
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </Button>
      </div>
    </div>
  );
};
