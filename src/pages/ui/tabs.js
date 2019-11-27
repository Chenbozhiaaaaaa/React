import React, { Component } from 'react'
import { Card, Button, Icon, Tabs, message } from 'antd'
import './ui.css'
const { TabPane } = Tabs;
export default class Tab extends Component {
    componentWillMount() {
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            {
                title: 'Tab 3',
                content: 'Content of Tab 3',
                key: '3'
            },
        ]
        this.setState({
            activeKey: panes[0].key,
            panes,
        });
    }
    callback = (key) => {
        message.info('点击的key:' + key)
    }
    onChange = activeKey => {
        this.setState({ activeKey });
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };
    render() {
        return (
            <div>
                <Card title="Tab标签" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图标签" className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span>
                            <Icon type="apple" />
                            Tab 1
                            </span>} key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <Icon type="android" />
                                Tab 2
                            </span>
                        } key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab标签" className='card-wrap'>
                    <Tabs
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                        type="editable-card">
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane
                                    tab={panel.title} key={panel.key} />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}
