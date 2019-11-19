import React, { Component } from 'react'
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <h1>
                        Demo
                    </h1>
                </div>
                <Menu theme="dark">
                    <SubMenu key="sub1" title='Item'>
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Iteom 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
