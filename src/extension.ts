import * as vscode from 'vscode';

export function activate(context:vscode.ExtensionContext) {
    console.log('Sora is now active!');

    const activateCommand = vscode.commands.registerCommand('sora.activate', () => {
        
        vscode.window.showInformationMessage('Sora is now active!');
    });

    context.subscriptions.push(activateCommand);
}

export function deactivate() {
    console.log('Sora is deactivated!');
}