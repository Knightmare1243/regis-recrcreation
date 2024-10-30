# Oscar comments

Hi Regis,

well done, nice to see.

Have you installed MS Copilot in VS Code? If so, you have the Chat tab on the left. Very useful.

You can ask Copilot how to explain team development workflow, I have endeavoured to give you some requests to put to Copilot.

Git development typically involve the following team roles: Developer, reviewer, maintainer/lead developer (lead), project manager (manager).

I suggest myself as a Reviewer, you Regis as a Developer and you Dylan as a Lead (Lead Developer).

- Which are the roles and their functions in Git/GitHub team development?
- Explain how to create settings for git in the context of GitHub, explain the .git folder and in exceptional circumstances, how to edit the .git folder and contents with VS Code.
- Explain how to use .gitignore and how to edit .gitignore in VS Code.
- Explain "forking" and how to use it in git team development.
- Explain the advantages of using "feature" branches instead of using the main branch of a project,  developers can work on new features in isolation, ensuring a stable and organized development process. This approach facilitates parallel development, improves code quality, and simplifies the integration of new features into the main codebase.
- Developer should never use the main branch, but instead create a developer specific branch copying the main branch where not using "feature" branches. To start, it is important to update the local main branch from the remote main branch. To select a branch as active, use checkout. What are the steps?
- In the context of developer contributing written code to the project, what is a pull request?
- Developer workflow to prepare a pull request?
- Reviewer workflow?
- Which team role members resolve conflicts in a pull request??
- Developer steps to deal with conflicts and/or feedback from review eg rebase developer branch to squash previous commits?
- Developer steps after resolving conflicts and review feedback?
- Developer has to commit changes to a branch, but why?
- Developer has to stage changes (in VS Code suffix changes from U - Untracked, M - Modified to A - Added to index/staging), effectively include certain or all changes in a commit from indexed files. Staging allows for fine granular control of what each commit will include and help creating a clear trail of commits which otherwise might be difficult to follow. Stash or stashing is very useful during development before ongoing work has been committed when the ongoing work might be disrupted for example it is necessary to switch to another branch or to stop with some code and instead start with some other code development. Both staged and unstaged changes can be stashed to avoid losing work done and recalled later. Explain advantages and disadvantages.
- Explain what is merge and how a developer locally with a developer branch synchronises with the remote main branch and how a maintainer of the project repository can make best use of merge.
- Explain merge cherry-pick and how to avoid merge problems.
