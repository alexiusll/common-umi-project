/*
 * @Author: linkenzone
 * @Date: 2021-05-21 16:30:28
 * @Descripttion: 这个文件夹对应是 tsconfig.json 中的 include
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

// 以下变量声明对应config.[env].ts文件内define的变量
declare const API_URL: string;
declare const API_AUTH_URL: string;
declare const API_SECRET_KEY: string;

// 避免js库 没有声明.ts文件造成报错
declare module 'vtk.js/*';
declare module '@ohif/ui';
declare module '@ohif/viewer';
declare module 'cornerstone-core';
declare module 'cornerstone-tools';
declare module 'cornerstone-web-image-loader';
declare module 'cornerstone-wado-image-loader';
declare module 'hammerjs';
declare module 'cornerstone-math';
declare module 'react-grid-layout';
declare module 'lodash';
declare module 'react-cornerstone-viewport';
