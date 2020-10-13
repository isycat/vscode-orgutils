import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // let oj = vscode.window.createOutputChannel("orgutils")
  vscode.window.onDidChangeTextEditorSelection(
    (changeEvent: any) => {
      let activeEditor = vscode.window.activeTextEditor!;
      const currentLine = activeEditor?.document.lineAt(activeEditor.selection.active.line);
      vscode.commands.executeCommand('setContext', 'orgutils:currentLineIsOrgEntry', currentLine.text.startsWith("*"));
      // let editor = changeEvent.textEditor;
    },
    null, context.subscriptions);
};

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
