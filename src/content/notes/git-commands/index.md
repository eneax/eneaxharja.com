---
title: "Git Commands"
date: "2023-01-30"
tags: ["git"]
---

A list of useful Git commands for everyday use.

### Stash

Stash is a way to save your work without committing it. It is useful when you want to change branches or pull the latest changes from a remote repository.

Save a specific file:

```bash
git stash push <file>
```

Save all changes:

```bash
git stash
```

List all stashes:

```bash
git stash list
```

Delete a specific stash:

```bash
git stash drop stash@{<number>}
```

Delete all stashes:

```bash
git stash drop
```

Apply a stash and delete it:

```bash
git stash pop
```

Apply the most recent stash:

```bash
git stash apply
```

Apply a specific stash:

```bash
git stash apply stash@{<number>}
```

### Branch

It is useful when you want to work on a new feature and test it without affecting the main branch.

List all branches:

```bash
git branch
```

Create a new branch and switch to it:

```bash
git checkout -b <name>
```

Switch back to the previous local branch you have been working on:

```bash
git checkout -
```

Rename a branch:

```bash
git branch -m <oldName> <newName>
```

Delete a branch:

```bash
git branch -d <name>
```

Add a branch to upstream repository:

```bash
git push --set-upstream origin <name>
```

### Stage and commit

Stage is a way to prepare your work for a commit. It allows you to commit your work in smaller parts.

Stage all changes:

```bash
git add .
```

Stage a specific file:

```bash
git add <file>
```

Unstage all changes:

```bash
git reset .
```

Commit your work:

```bash
git commit -m "your commit message"
```

### Overrides

Overrides are useful when you want to undo your work.

Amend a commit message:

```bash
git commit --amend
```

If you want to keep your work and undo just the last commit:

```bash
git reset HEAD~
```

If you want to override a file in your local repo with the version in the remote repo:

```bash
git reset --hard origin/<current-branch>
```

### Restore previous work

Restore your work if you accidentally deleted it.

Undo all uncommitted changes:

```bash
git checkout .
```

Restore a deleted file:

```bash
git checkout HEAD <file>
```

Remove last commit by keeping all changes staged:

```bash
git reset --soft HEAD~1
```

### Squash commits

First, check the number of commits you want to squash. Then, use that number to tell git how many commits to squash into one:

```bash
git rev-list HEAD --count
git rebase -i HEAD~<number-of-commits>
```

### Rebase

Bring the changes from the "main" branch to the "staging" branch. Then, push the changes to the existing repository:

```bash
git checkout staging
git rebase main
git push
```

### Sync feature branch with main branch

If you are in the "feature-branch" and need to pull in the latest changes from the remote main branch:

```bash
git checkout main
git pull
git checkout feature-branch
git pull --all
git merge main
```

### Rename master branch to main in GitHub

First, make sure to change the name of the branch on GitHub:

```bash
https://github.com/:username/:repo-name/branches
```

Then, change the name of the branch locally:

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
