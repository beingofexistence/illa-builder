import { FC } from "react"
import { PageNavBar } from "./components/PageNavBar"
import { DataWorkspace } from "./components/DataWorkspace"
import { QueryEditor } from "./components/QueryEditor"
import {
  editorContainerStyle,
  leftPanelStyle,
  rightPanelStyle,
  mainPanelStyle,
  navbarStyle,
  middlePanelStyle,
  centerPanelStyle,
  bottomPanelStyle,
  contentStyle,
} from "./style"
import { WidgetPickerEditor } from "./components/WidgetPickerEditor"
import { CanvasContainer } from "./components/CanvasContainer"

export const Editor: FC = () => {
  return (
    <div css={editorContainerStyle}>
      <DataWorkspace css={leftPanelStyle} />
      <div css={mainPanelStyle}>
        <PageNavBar css={navbarStyle} />
        <div css={contentStyle}>
          <div css={middlePanelStyle}>
            <CanvasContainer css={centerPanelStyle} />
            <QueryEditor css={bottomPanelStyle} />
          </div>
          <WidgetPickerEditor css={rightPanelStyle} />
        </div>
      </div>
    </div>
  )
}

Editor.displayName = "Editor"