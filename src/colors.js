/**
 *****************************************
 * Created by lifx
 * Created on 2017-07-18
 *****************************************
 */
'use strict';


/**
 ************************************
 * 加载依赖
 ************************************
 */
const
    settings = require('./settings.json');


/**
 ************************************
 * 生成配置模版
 ************************************
 */
module.exports = `{
    "focusBorder": "${ settings.background }",
    "selection.background": "#ccccc7",
    "widget.shadow": "#000000",
    "input.background": "#414339",
    "inputOption.activeBorder": "${ settings.background }",
    "inputValidation.infoBackground": "#546190",
    "inputValidation.infoBorder": "#819aff",
    "inputValidation.warningBackground": "#848528",
    "inputValidation.warningBorder": "#e2e22e",
    "inputValidation.errorBackground": "#90274a",
    "inputValidation.errorBorder": "#f92672",
    "dropdown.background": "#414339",
    "list.focusBackground": "#414339",
    "list.activeSelectionBackground": "${ settings.background }",
    "list.inactiveSelectionBackground": "#414339",
    "list.hoverBackground": "#272822",
    "list.dropBackground": "#414339",
    "list.highlightForeground": "${ settings.foreground }",
    "pickerGroup.foreground": "${ settings.background }",
    "button.background": "${ settings.background }",
    "badge.background": "${ settings.background }",
    "badge.foreground": "${ settings.foreground }",
    "progressBar.background": "${ settings.background }",
    "editor.background": "#272822",
    "editor.foreground": "${ settings.foreground }",
    "editorWidget.background": "#1e1f1c",
    "editor.selectionBackground": "#49483e",
    "editorHoverWidget.background": "#414339",
    "editorHoverWidget.border": "${ settings.background }",
    "diffEditor.insertedTextBackground": "#66852880",
    "diffEditor.removedTextBackground": "#90274a80",
    "editor.lineHighlightBackground": "#3e3d32",
    "editorCursor.foreground": "#f8f8f0",
    "editorWhitespace.foreground": "#464741",
    "editorIndentGuide.background": "#464741",
    "editorLineNumber.foreground": "#90908a",
    "editorSuggestWidget.background": "#272822",
    "editorSuggestWidget.border": "${ settings.background }",
    "peekViewTitle.background": "#1e1f1c",
    "peekView.border": "${ settings.background }",
    "peekViewResult.background": "#1e1f1c",
    "peekViewResult.selectionBackground": "#414339",
    "peekViewEditor.background": "#272822",
    "peekViewResult.matchHighlightBackground": "${ settings.background }",
    "peekViewEditor.matchHighlightBackground": "${ settings.background }",
    "tab.inactiveBackground": "#414339",
    "tab.border": "#1e1f1c",
    "tab.inactiveForeground": "#ccccc7",
    "editorGroupHeader.tabsBackground": "#1e1f1c",
    "editorGroup.border": "#414339",
    "editorGroup.dropBackground": "#41433980",
    "panel.border": "#414339",
    "panelTitle.activeForeground": "${ settings.foreground }",
    "panelTitle.inactiveForeground": "${ settings.background }",
    "panelTitle.activeBorder": "${ settings.background }",
    "statusBar.background": "#414339",
    "statusBar.noFolderBackground": "#414339",
    "activityBar.background": "#272822",
    "activityBar.foreground": "${ settings.foreground }",
    "activityBar.dropBackground": "#414339",
    "sideBar.background": "#1e1f1c",
    "sideBarSectionHeader.background": "#272822",
    "titleBar.activeBackground": "#1e1f1c",
    "terminal.foreground": "${ settings.foreground }",
    "debugToolBar.background": "#1e1f1c",
    "statusBar.debuggingBackground": "${ settings.background }",
    "terminal.ansiBlack": "#333333",
    "terminal.ansiRed": "#c4265e",
    "terminal.ansiGreen": "#a6e22e",
    "terminal.ansiYellow": "#dddd00",
    "terminal.ansiBlue": "#66d9ef",
    "terminal.ansiMagenta": "#ee52f7",
    "terminal.ansiCyan": "#00dddd",
    "terminal.ansiWhite": "#e3e3dd",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightRed": "#f92672",
    "terminal.ansiBrightGreen": "#a6e22e",
    "terminal.ansiBrightYellow": "#e2e22e",
    "terminal.ansiBrightBlue": "#819aff",
    "terminal.ansiBrightMagenta": "#ae81ff",
    "terminal.ansiBrightCyan": "#66d9ef",
    "terminal.ansiBrightWhite": "${ settings.foreground }"
}`;
