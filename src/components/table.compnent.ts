import { Component, OnInit, Input, Output} from '@angular/core';


@Component({
  selector: 'my-table',
  template: `
  <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
            `
})
export class TableComponent {
  title = 'app';
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Antonette', title: 'Antonette' }, { value: 'Bret', title: 'Bret' }, {
              value: '<b>Samantha</b>',
              title: 'Samantha',
            }],
          },
        },

      },
      email: {
        title: 'Email',
      }
    },
    actions:{
        position: "right"
    }
  };

  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    }
  ];
  position = "right";
}