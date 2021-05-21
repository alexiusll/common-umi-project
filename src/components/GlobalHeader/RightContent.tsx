/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-02 11:12:47
 */
import React, { useEffect } from 'react';
import { connect, useModel } from 'umi';
import styles from './index.less';
import AvatarDrowdown from './AvatarDrowdown';
import { SelectLang } from './SelectLang';

interface GlobalHeaderRightProps {
  onClickSign: () => void;
}

const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = (props) => {
  const className = styles.right;

  // 获取基础信息
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  // 仅在组件渲染的时候调用一次
  useEffect(() => {}, []);

  return (
    <div className={className}>
      <AvatarDrowdown />

      <span style={{ display: 'inline-block', marginLeft: '12px' }}>
        <SelectLang reload={false} />
      </span>
    </div>
  );
};

export default connect()(GlobalHeaderRight);
