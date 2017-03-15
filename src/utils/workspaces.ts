export const getWorkspaces = (resBody) =>
  resBody.data.workspaces.reduce((workspaces, workspace, i) => {
    workspaces[workspace.id] = workspace
    return workspaces
  }, {})
