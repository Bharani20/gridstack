import { leadingComment } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GridStack, GridStackOptions, GridStackWidget } from 'gridstack';
import {
  elementCB,
  GridstackComponent,
  gsCreateNgComponents,
  NgGridStackOptions,
  NgGridStackWidget,
  nodesCB,
} from 'gridstack/dist/angular';
let ids = 1;
@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrl: './page-builder.component.scss',
})
export class PageBuilderComponent implements OnInit {
  value!: string;
  @ViewChild(GridstackComponent) gridComp?: GridstackComponent;
  @ViewChild('origTextArea', { static: true })
  origTextEl?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('textArea', { static: true })
  textEl?: ElementRef<HTMLTextAreaElement>;

  selectedWidget!: NgGridStackWidget;

  // which sample to show
  public show = 5;

  /** sample grid options and items to load... */
  public items: GridStackWidget[] = [
    { x: 0, y: 0, minW: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ];
  public gridOptions: GridStackOptions = {
    margin: 5,
    // float: true,
    minRow: 1,
    // maxRow: 7,
    cellHeight: 50,
    columnOpts: { breakpoints: [{ w: 768, c: 1 }] },
  };
  documentStyle = getComputedStyle(document.documentElement);
  textColor = this.documentStyle.getPropertyValue('--text-color');
  textColorSecondary = this.documentStyle.getPropertyValue(
    '--text-color-secondary'
  );
  surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');

  basicData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: [540, 325, 702, 620],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 1,
      },
    ],
  };

  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: this.textColor,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: this.textColorSecondary,
        },
        grid: {
          color: this.surfaceBorder,
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: this.textColorSecondary,
        },
        grid: {
          color: this.surfaceBorder,
          drawBorder: false,
        },
      },
    },
  };

  public sub0: NgGridStackWidget[] = [
    {
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      selector: 'app-primeng-btn',
      input: { label: 'Button' },
    },
    // { x: 1, y: 0, selector: 'app-a', input: { text: 'bar' } },
    {
      x: 2,
      y: 0,
      w: 10,
      h: 4,
      selector: 'app-primeng-table',
      input: {
        tableData: [
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5,
          },
          {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5,
          },
        ],
      },
    },
    // { x: 1, y: 1, content: 'plain html' },
    {
      x: 1,
      y: 1,
      w: 4,
      h: 5,
      selector: 'app-primeng-bar-chart',
      input: { basicData: this.basicData, basicOptions: this.basicOptions },
    },
  ];

  public gridOptionsFull: NgGridStackOptions = {
    ...this.gridOptions,
    children: this.sub0,
  };

  public lazyChildren: NgGridStackWidget[] = [];
  public gridOptionsDelay: NgGridStackOptions = {
    ...this.gridOptions,
    lazyLoad: true,
    children: this.lazyChildren,
  };

  // nested grid options
  private subOptions: GridStackOptions = {
    cellHeight: 50, // should be 50 - top/bottom
    column: 'auto', // size to match container. make sure to include gridstack-extra.min.css
    acceptWidgets: true, // will accept .grid-stack-item by default
    margin: 5,
  };
  public sub1: NgGridStackWidget[] = [
    { x: 0, y: 0, selector: 'app-a' },
    { x: 1, y: 0, selector: 'app-b' },
    { x: 2, y: 0, selector: 'app-c' },
    { x: 3, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];
  public sub2: NgGridStackWidget[] = [
    { x: 0, y: 0 },
    { x: 0, y: 1, w: 2 },
  ];
  public sub3: NgGridStackWidget = {
    selector: 'app-n',
    w: 2,
    h: 2,
    subGridOpts: {
      children: [{ selector: 'app-a' }, { selector: 'app-b', y: 0, x: 1 }],
    },
  };
  private subChildren: NgGridStackWidget[] = [
    { x: 0, y: 0, content: 'regular item' },
    { x: 1, y: 0, w: 4, h: 4, subGridOpts: { children: this.sub1 } },
    // {x:5, y:0, w:3, h:4, subGridOpts: {children: this.sub2}},
    this.sub3,
  ];
  public nestedGridOptions: NgGridStackOptions = {
    // main grid options
    cellHeight: 50,
    margin: 5,
    minRow: 2, // don't collapse when empty
    acceptWidgets: true,
    subGridOpts: this.subOptions, // all sub grids will default to those
    children: this.subChildren,
  };
  public twoGridOpt1: NgGridStackOptions = {
    column: 6,
    cellHeight: 50,
    margin: 5,
    minRow: 1, // don't collapse when empty
    removable: '.trash',
    acceptWidgets: true,
    float: true,
    children: [
      { x: 0, y: 0, w: 2, h: 2, selector: 'app-a' },
      { x: 3, y: 1, h: 2, selector: 'app-b' },
      { x: 4, y: 1 },
      { x: 2, y: 3, w: 3, maxW: 3, id: 'special', content: 'has maxW=3' },
    ],
  };
  public twoGridOpt2: NgGridStackOptions = {
    ...this.twoGridOpt1,
    float: false,
  };
  private serializedData?: NgGridStackOptions;

  // sidebar content to create storing the Widget description to be used on drop
  public sidebarContent6: NgGridStackWidget[] = [
    {
      w: 2,
      h: 2,
      subGridOpts: { children: [{ content: 'nest 1' }, { content: 'nest 2' }] },
    },
    this.sub3,
  ];
  public sidebarContent7: NgGridStackWidget[] = [
    { selector: 'app-a' },
    { selector: 'app-b', w: 2, maxW: 3 },
  ];

  constructor() {
    for (let y = 0; y <= 5; y++)
      this.lazyChildren.push({
        x: 0,
        y,
        id: String(y),
        selector: y % 2 ? 'app-b' : 'app-a',
      });

    // give them content and unique id to make sure we track them during changes below...
    [
      ...this.items,
      ...this.subChildren,
      ...this.sub1,
      ...this.sub2,
      ...this.sub0,
    ].forEach((w: NgGridStackWidget) => {
      if (!w.selector && !w.content && !w.subGridOpts)
        w.content = `item ${ids++}`;
    });
  }

  ngOnInit(): void {
    this.onShow(this.show);

    // TEST
    // setTimeout(() => {
    //   if (!this.gridComp) return;
    //   this.saveGrid();
    //   // this.clearGrid();
    //   this.delete();
    //   this.delete();
    //   this.loadGrid();
    //   this.delete();
    //   this.delete();
    // }, 500)
  }

  public onShow(val: number) {
    this.show = val;

    // set globally our method to create the right widget type
    if (val < 3) GridStack.addRemoveCB = undefined;
    else GridStack.addRemoveCB = gsCreateNgComponents;

    // let the switch take affect then load the starting values (since we sometimes save())
    setTimeout(() => {
      let data;
      switch (val) {
        // case 0:
        //   data = this.case0Comp?.items;
        //   break;
        // case 1:
        //   data = this.case1Comp?.items;
        //   break;
        // case 2:
        //   data = this.case2Comp?.items;
        //   break;
        // case 3:
        //   data = this.gridComp?.grid?.save(true, true);
        //   break;
        // case 4:
        //   data = this.items;
        //   break;
        case 5:
          data = this.gridOptionsFull;
          GridStack.setupDragIn(
            '.sidebar-item',
            undefined,
            this.sidebarContent6
          );
          break;
        case 6:
          data = this.nestedGridOptions;
          GridStack.setupDragIn('.newWidget', {
            appendTo: 'body',
            helper: 'clone',
          });
          break;
        case 7:
          data = this.twoGridOpt1;
          GridStack.setupDragIn(
            '.sidebar-item',
            undefined,
            this.sidebarContent7
          );
          break;
      }
      if (this.origTextEl)
        this.origTextEl.nativeElement.value = JSON.stringify(data, null, '  ');
    });
    if (this.textEl) this.textEl.nativeElement.value = '';
  }

  /** called whenever items change size/position/etc.. */
  public onChange(data: nodesCB) {
    // TODO: update our TEMPLATE list to match ?
    // NOTE: no need for dynamic as we can always use grid.save() to get latest layout, or grid.engine.nodes
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

  public onResizeStop(data: elementCB) {
    console.log('resizestop ', data.el.gridstackNode);
  }

  /**
   * TEST dynamic grid operations - uses grid API directly (since we don't track structure that gets out of sync)
   */
  public add() {
    // TODO: BUG the content doesn't appear until widget is moved around (or another created). Need to force
    // angular detection changes...
    this.gridComp?.grid?.addWidget({
      x: 3,
      y: 0,
      w: 2,
      content: `item ${ids}`,
      id: String(ids++),
    });
  }
  public delete() {
    let grid = this.gridComp?.grid;
    if (!grid) return;
    let node = grid.engine.nodes[0];
    // delete any children first before subGrid itself...
    if (node?.subGrid && node.subGrid.engine.nodes.length) {
      grid = node.subGrid;
      node = grid.engine.nodes[0];
    }
    if (node) grid.removeWidget(node.el!);
  }
  public modify() {
    this.gridComp?.grid?.update(this.gridComp?.grid.engine.nodes[0]?.el!, {
      w: 3,
    });
  }
  public newLayout() {
    this.gridComp?.grid?.load([
      { x: 0, y: 1, id: '1', minW: 1, w: 1 }, // new size/constrain
      { x: 1, y: 1, id: '2' },
      // {x:2, y:1, id:'3'}, // delete item
      { x: 3, y: 0, w: 2, content: 'new item' }, // new item
    ]);
  }
  public load(layout: GridStackWidget[]) {
    this.gridComp?.grid?.load(layout);
  }

  /**
   * ngFor case: TEST TEMPLATE operations - NOT recommended unless you have no GS creating/re-parenting
   */
  public addNgFor() {
    // new array isn't required as Angular detects changes to content with trackBy:identify()
    // this.items = [...this.items, { x:3, y:0, w:3, content:`item ${ids}`, id:String(ids++) }];
    this.items.push({ w: 2, content: `item ${ids}`, id: String(ids++) });
  }
  public deleteNgFor() {
    this.items.pop();
  }
  public modifyNgFor() {
    // this will not update the DOM nor trigger gridstackItems.changes for GS to auto-update, so set new option of the gridItem instead
    // this.items[0].w = 3;
    const gridItem = this.gridComp?.gridstackItems?.get(0);
    if (gridItem) gridItem.options = { w: 3 };
  }
  public newLayoutNgFor() {
    this.items = [
      { x: 0, y: 1, id: '1', minW: 1, w: 1 }, // new size/constrain
      { x: 1, y: 1, id: '2' },
      // {x:2, y:1, id:'3'}, // delete item
      { x: 3, y: 0, w: 2, content: 'new item' }, // new item
    ];
  }
  public clearGrid() {
    if (!this.gridComp) return;
    this.gridComp.grid?.removeAll();
  }
  public saveGrid() {
    this.serializedData =
      (this.gridComp?.grid?.save(false, true) as GridStackOptions) || ''; // no content, full options
    if (this.textEl)
      this.textEl.nativeElement.value = JSON.stringify(
        this.serializedData,
        null,
        '  '
      );
    console.log(this.serializedData);
  }
  public loadGrid() {
    if (!this.gridComp) return;
    GridStack.addGrid(this.gridComp.el, this.serializedData);
  }

  // ngFor TEMPLATE unique node id to have correct match between our items used and GS
  public identify(index: number, w: GridStackWidget) {
    return w.id; // or use index if no id is set and you only modify at the end...
  }

  addWidget(widgetName: string) {
    switch (widgetName) {
      case 'primeng-btn':
        const widget = {
          x: 0,
          y: 0,
          w: 4,
          h: 2,
          selector: 'app-primeng-btn',
          input: { label: 'Button from widget-panel' },
        };
        this.gridComp?.grid?.addWidget(widget);
        break;
      case 'primeng-bar-chart':
        this.selectedWidget = {
          x: 1,
          y: 1,
          w: 4,
          h: 5,
          selector: 'app-primeng-bar-chart',
          input: { basicData: this.basicData, basicOptions: this.basicOptions },
        };
        this.gridComp?.grid?.addWidget(this.selectedWidget);
        break;
      case 'primeng-table':
        this.selectedWidget = {
          x: 2,
          y: 0,
          w: 10,
          h: 4,
          selector: 'app-primeng-table',
          input: {
            tableData: [
              {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
              },
              {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
              },
            ],
          },
        };
        this.gridComp?.grid?.addWidget(this.selectedWidget);
        break;
      case 'primeng-text-area':
        this.selectedWidget = {
          x: 2,
          y: 0,
          w: 10,
          h: 4,
          selector: 'app-primeng-textarea',
          input: {
            value: 'value goes here....',
          },
        };
        this.gridComp?.grid?.addWidget(this.selectedWidget);
        break;
    }
  }
}
