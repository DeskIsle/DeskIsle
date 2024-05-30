import LinkWidget, { LinkWidgetEditor } from "@/components/widgets/LinkWidget";
import { atom } from "jotai";
import React from "react";

export interface Comp {
  id: number,
  row: number,
  col: number,
  width: number,
  height: number,
  Element: ({}?: any) => React.JSX.Element,
  ElementEditor: ({}?: any) => React.JSX.Element
  elementProps: any
}

export const compsAtom = atom<Comp[]>([
  {
    id: 1,
    row: 0,
    col: 0,
    width: 1,
    height: 1,
    Element: LinkWidget,
    ElementEditor: LinkWidgetEditor,
    elementProps: {
      link: "https://github.com",
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjV2LTEuNjljLTIuNzcuNi0zLjM2LTEuMzQtMy4zNi0xLjM0Yy0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3Yy0uOTEtLjYyLjA3LS42LjA3LS42YzEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDNjLjg3IDEuNTIgMi4zNCAxLjA3IDIuOTEuODNjLjA5LS42NS4zNS0xLjA5LjYzLTEuMzRjLTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTJjMC0xLjExLjM4LTIgMS4wMy0yLjcxYy0uMS0uMjUtLjQ1LTEuMjkuMS0yLjY0YzAgMCAuODQtLjI3IDIuNzUgMS4wMmMuNzktLjIyIDEuNjUtLjMzIDIuNS0uMzNzMS43MS4xMSAyLjUuMzNjMS45MS0xLjI5IDIuNzUtMS4wMiAyLjc1LTEuMDJjLjU1IDEuMzUuMiAyLjM5LjEgMi42NGMuNjUuNzEgMS4wMyAxLjYgMS4wMyAyLjcxYzAgMy44Mi0yLjM0IDQuNjYtNC41NyA0LjkxYy4zNi4zMS42OS45Mi42OSAxLjg1VjIxYzAgLjI3LjE2LjU5LjY3LjVDMTkuMTQgMjAuMTYgMjIgMTYuNDIgMjIgMTJBMTAgMTAgMCAwIDAgMTIgMiIvPjwvc3ZnPg==',
      bgColor: '#FFFFFF',
    }
  },{
    id: 2,
    row: 0,
    col: 1,
    width: 1,
    height: 1,
    Element: LinkWidget,
    ElementEditor: LinkWidgetEditor,
    elementProps: {
      link: "https://notion.so",
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjk2ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI2OCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2LjA5MiAxMS41MzhMMTY0LjA5LjYwOGMxOC4xNzktMS41NiAyMi44NS0uNTA4IDM0LjI4IDcuODAxbDQ3LjI0MyAzMy4yODJDMjUzLjQwNiA0Ny40MTQgMjU2IDQ4Ljk3NSAyNTYgNTUuMjA3djE4Mi41MjdjMCAxMS40MzktNC4xNTUgMTguMjA1LTE4LjY5NiAxOS4yNEw2NS40NCAyNjcuMzc4Yy0xMC45MTMuNTE3LTE2LjExLTEuMDQzLTIxLjgyNS04LjMyN0w4LjgyNiAyMTMuODE0QzIuNTg2IDIwNS40ODcgMCAxOTkuMjU0IDAgMTkxLjk3VjI5LjcyNmMwLTkuMzUyIDQuMTU1LTE3LjE1MyAxNi4wOTItMTguMTg4Ii8+PHBhdGggZD0iTTE2NC4wOS42MDhMMTYuMDkyIDExLjUzOEM0LjE1NSAxMi41NzMgMCAyMC4zNzQgMCAyOS43MjZ2MTYyLjI0NWMwIDcuMjg0IDIuNTg1IDEzLjUxNiA4LjgyNiAyMS44NDNsMzQuNzg5IDQ1LjIzN2M1LjcxNSA3LjI4NCAxMC45MTIgOC44NDQgMjEuODI1IDguMzI3bDE3MS44NjQtMTAuNDA0YzE0LjUzMi0xLjAzNSAxOC42OTYtNy44MDEgMTguNjk2LTE5LjI0VjU1LjIwN2MwLTUuOTExLTIuMzM2LTcuNjE0LTkuMjEtMTIuNjZsLTEuMTg1LS44NTZMMTk4LjM3IDguNDA5QzE4Ni45NC4xIDE4Mi4yNy0uOTUyIDE2NC4wOS42MDhNNjkuMzI3IDUyLjIyYy0xNC4wMzMuOTQ1LTE3LjIxNiAxLjE1OS0yNS4xODYtNS4zMjNMMjMuODc2IDMwLjc3OGMtMi4wNi0yLjA4Ni0xLjAyNi00LjY5IDQuMTYzLTUuMjA3bDE0Mi4yNzQtMTAuMzk1YzExLjk0Ny0xLjA0MyAxOC4xNyAzLjEyIDIyLjg0MiA2Ljc1OGwyNC40MDEgMTcuNjhjMS4wNDMuNTI1IDMuNjM4IDMuNjM3LjUxNyAzLjYzN0w3MS4xNDYgNTIuMDk1em0tMTYuMzYgMTgzLjk1NFY4MS4yMjJjMC02Ljc2NyAyLjA3Ny05Ljg4NyA4LjMtMTAuNDEzTDIzMC4wMiA2MC45M2M1LjcyNC0uNTE3IDguMzEgMy4xMiA4LjMxIDkuODc5djE1My45MTdjMCA2Ljc2Ny0xLjA0NCAxMi40OS0xMC4zODcgMTMuMDA4bC0xNjEuNDg3IDkuMzYxYy05LjM0My41MTctMTMuNDg5LTIuNTk0LTEzLjQ4OS0xMC45MjFNMjEyLjM3NyA4OS41M2MxLjAzNCA0LjY4MSAwIDkuMzYyLTQuNjgxIDkuODk3bC03Ljc4MyAxLjU0MnYxMTQuNDA0Yy02Ljc1OCAzLjYzNy0xMi45ODEgNS43MTUtMTguMTggNS43MTVjLTguMzA4IDAtMTAuMzg2LTIuNjA0LTE2LjYwOS0xMC4zOTZsLTUwLjg5OC04MC4wNzl2NzcuNDc2bDE2LjEgMy42NDZzMCA5LjM2Mi0xMi45ODkgOS4zNjJsLTM1LjgxNCAyLjA3N2MtMS4wNDMtMi4wODYgMC03LjI4NCAzLjYzLTguMzE4bDkuMzUxLTIuNTk1VjEwOS44MjNsLTEyLjk4LTEuMDUyYy0xLjA0NC00LjY4IDEuNTUtMTEuNDM5IDguODI2LTExLjk2NWwzOC40MjYtMi41ODVsNTIuOTU4IDgxLjExM3YtNzEuNzZsLTEzLjQ5OC0xLjU1MmMtMS4wNDMtNS43MzMgMy4xMTEtOS44OTYgOC4zLTEwLjQwNHoiLz48L3N2Zz4=',
      bgColor: '#FFFFFF',
    }
  },{
    id: 3,
    row: 0,
    col: 2,
    width: 1,
    height: 1,
    Element: LinkWidget,
    ElementEditor: LinkWidgetEditor,
    elementProps: {
      link: "https://tsch.js.org/",
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iIzMxNzhDNiIgZD0iTTIwIDBoMjE2YzExLjA0NiAwIDIwIDguOTU0IDIwIDIwdjIxNmMwIDExLjA0Ni04Ljk1NCAyMC0yMCAyMEgyMGMtMTEuMDQ2IDAtMjAtOC45NTQtMjAtMjBWMjBDMCA4Ljk1NCA4Ljk1NCAwIDIwIDAiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTUwLjUxOCAyMDAuNDc1djI3LjYyYzQuNDkyIDIuMzAyIDkuODA1IDQuMDI4IDE1LjkzOCA1LjE3OWM2LjEzMyAxLjE1MSAxMi41OTcgMS43MjYgMTkuMzkzIDEuNzI2YzYuNjIyIDAgMTIuOTE0LS42MzMgMTguODc0LTEuODk5YzUuOTYtMS4yNjYgMTEuMTg3LTMuMzUyIDE1LjY3OC02LjI1N2M0LjQ5Mi0yLjkwNiA4LjA0OC02LjcwNCAxMC42NjktMTEuMzk0YzIuNjItNC42ODkgMy45My0xMC40ODYgMy45My0xNy4zOTFjMC01LjAwNi0uNzQ5LTkuMzk0LTIuMjQ2LTEzLjE2M2EzMC43NDggMzAuNzQ4IDAgMCAwLTYuNDc5LTEwLjA1NWMtMi44MjEtMi45MzUtNi4yMDUtNS41NjctMTAuMTQ5LTcuODk4Yy0zLjk0NS0yLjMzLTguMzk0LTQuNTMxLTEzLjM0Ny02LjYwMmMtMy42MjgtMS40OTctNi44ODEtMi45NDktOS43NjEtNC4zNTljLTIuODc5LTEuNDEtNS4zMjctMi44NDgtNy4zNDItNC4zMTZjLTIuMDE2LTEuNDY3LTMuNTcxLTMuMDIxLTQuNjY1LTQuNjYxYy0xLjA5NC0xLjY0LTEuNjQxLTMuNDk1LTEuNjQxLTUuNTY3YzAtMS44OTkuNDg5LTMuNjEgMS40NjgtNS4xMzVzMi4zNjItMi44MzQgNC4xNDctMy45MjdjMS43ODUtMS4wOTQgMy45NzMtMS45NDIgNi41NjUtMi41NDdjMi41OTEtLjYwNCA1LjQ3MS0uOTA2IDguNjM4LS45MDZjMi4zMDQgMCA0LjczNy4xNzMgNy4yOTkuNTE4YzIuNTYzLjM0NSA1LjE0Ljg3NyA3LjczMiAxLjU5N2E1My42NjkgNTMuNjY5IDAgMCAxIDcuNTU4IDIuNzE5YTQxLjcgNDEuNyAwIDAgMSA2Ljc4MSAzLjc5N3YtMjUuODA3Yy00LjIwNC0xLjYxMS04Ljc5Ny0yLjgwNS0xMy43NzgtMy41ODJjLTQuOTgxLS43NzctMTAuNjk3LTEuMTY1LTE3LjE0Ny0xLjE2NWMtNi41NjUgMC0xMi43ODQuNzA1LTE4LjY1OCAyLjExNWMtNS44NzQgMS40MDktMTEuMDQzIDMuNjEtMTUuNTA2IDYuNjAyYy00LjQ2MyAyLjk5My03Ljk5IDYuODA1LTEwLjU4MiAxMS40MzdjLTIuNTkxIDQuNjMyLTMuODg3IDEwLjE3LTMuODg3IDE2LjYxNWMwIDguMjI4IDIuMzc1IDE1LjI0OCA3LjEyNyAyMS4wNmM0Ljc1MSA1LjgxMSAxMS45NjMgMTAuNzMxIDIxLjYzOCAxNC43NTlhMjkxLjQ1OCAyOTEuNDU4IDAgMCAxIDEwLjYyNSA0LjU3NWMzLjI4MyAxLjQ5NiA2LjExOSAzLjA0OSA4LjUwOSA0LjY2YzIuMzkgMS42MTEgNC4yNzYgMy4zNjYgNS42NTggNS4yNjVjMS4zODIgMS44OTkgMi4wNzMgNC4wNTcgMi4wNzMgNi40NzRhOS45MDEgOS45MDEgMCAwIDEtMS4yOTYgNC45NjNjLS44NjMgMS41MjQtMi4xNzQgMi44NDgtMy45MyAzLjk3Yy0xLjc1NiAxLjEyMi0zLjk0NSAxLjk5OS02LjU2NSAyLjYzMmMtMi42Mi42MzMtNS42ODcuOTUtOS4yLjk1Yy01Ljk4OSAwLTExLjkyLTEuMDUtMTcuNzk0LTMuMTUxYy01Ljg3NS0yLjEtMTEuMzE3LTUuMjUtMTYuMzI3LTkuNDUxbS00Ni4wMzYtNjguNzMzSDE0MFYxMDlINDF2MjIuNzQyaDM1LjM0NVYyMzNoMjguMTM3eiIvPjwvc3ZnPg==',
      bgColor: '#FFFFFF',
    }
  }
  // , {
  //   id: 5,
  //   row: 1,
  //   col: 0,
  //   width: 5,
  //   height: 5,
  //   tag: '',
  //   title: '天气',
  //   element: ClimaWidget,
  //   elementEditor: null,
  //   elementProps: {
      
  //   }
  // }
  // ,{
  //   id: 3,
  //   row: 1,
  //   col: 0,
  //   width: 4,
  //   height: 4,
  //   tag: '',
  //   title: '',
  //   type: "ImageWidget",
  //   target: {
  //     img: "https://component-1256901694.cos.ap-shanghai.myqcloud.com/images/img1.jpg",
  //     alt: "Girl under the tree."
  //   }
  // },
  // {
  //   row: 4,
  //   col: 4,
  //   width: 6,
  //   height: 6,
  //   tag: '',
  //   title: 'Clima',
  //   type: "IFrameWidget",
  //   target: {
  //     src: 'https://component-1256901694.cos.ap-shanghai.myqcloud.com/component/clima/index.html',
  //     scale: 1.1
  //   }
  // }
])

// 下一个可放置的位置
export const nextPlacePosition = atom({row: 0, col: 3})
