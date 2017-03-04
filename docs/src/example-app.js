import React from 'react';
import {
  Tabs,
  TabList,
  TabListItem,
  TabContentList,
  TabContentListItem,
} from '../../lib/tabs';
import {
  List,
  ListItem,
} from '../../lib/list';
import {
  SwipeableView,
  SwipeableViewContent,
  SwipeableViewBackground,
} from '../../lib/swipeable-view';

export class ExampleApp extends React.Component {
  constructor() {
    super();

    this.state = {
      labels: ['Active', 'Completed'],
      tasks: [{
        id: 0,
        completed: false,
        content: 'Item 0',
      }, {
        id: 1,
        completed: false,
        content: 'Item 1',
      }, {
        id: 2,
        completed: true,
        content: 'Item 2',
      }, {
        id: 3,
        completed: false,
        content: 'Item 3',
      }],
    };
  }
  render() {
    const labelTabItemElements = [];
    const labelTabContentItemElements = [];

    const tabElements = this.state.labels.forEach((label, index) => {
      const tasks = this.state.tasks.filter(task => {
        if (label === 'Active' && !task.completed) {
          return true;
        } else if (label === 'Completed' && task.completed) {
          return true;
        }
      });

      labelTabItemElements.push(<TabListItem key={index} index={index}>{label}</TabListItem>);

      labelTabContentItemElements.push(
        <TabContentListItem key={index} index={index}>
          <List
            onSort={(from, to) => {
              const activeTasks = this.state.tasks.filter(task_ => {
                return !task_.completed;
              });
              const completedTasks = this.state.tasks.filter(task_ => {
                return task_.completed;
              });
              const targetTasks = (label === 'Active') ? activeTasks : completedTasks;
              const tmpItem = targetTasks.splice(from, 1);
              targetTasks.splice(to, 0, tmpItem[0]);
              this.setState({
                tasks: activeTasks.concat(completedTasks),
              });
            }}
            >{tasks.map(task => {
              return (
                <ListItem key={task.id}>
                  <SwipeableView
                    onSwipeLeft={() => {
                      const newTasks = this.state.tasks.filter(task_ => {
                        if (task_.id === task.id) {
                          return false;
                        }
                        return true;
                      });
                      this.setState({
                        tasks: newTasks,
                      });
                    }}
                    throughLeft
                    onSwipeRight={() => {
                      const newTasks = this.state.tasks.map(task_ => {
                        if (task_.id === task.id) {
                          return Object.assign({}, task_, {
                            completed: !task_.completed,
                          });
                        }
                        return task_;
                      });
                      this.setState({
                        tasks: newTasks,
                      });
                    }}
                    >
                    <SwipeableViewBackground position="left"><span>Completed</span></SwipeableViewBackground>
                    <SwipeableViewContent>{task.content}</SwipeableViewContent>
                    <SwipeableViewBackground position="right"><span>Delete</span></SwipeableViewBackground>
                  </SwipeableView>
                </ListItem>
              );
            })}</List>
        </TabContentListItem>
      );
    });
    return (
      <Tabs>
        <TabList>{labelTabItemElements}</TabList>
        <TabContentList>{labelTabContentItemElements}</TabContentList>
      </Tabs>
    );
  }
}
