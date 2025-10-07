---
title: Contributing to a Modpack
authors:
  - mia-riezebos
description:
type:
created: 2025-10-07T19:48:40+02:00
modified: 2025-10-07T21:02:57+02:00
license: CC BY-SA 4.0
license_url: https://github.com/lucent-mc/docs/blob/dev/content/LICENSE
---

On this page you will learn how to clone a modpack repository locally so you can work on it and contribute updates or fixes to it.

## Step 1: Get the modpack locally

1. Fork the repository you want to work on, on GitHub.
2. Download the most recent `modrinth.index.json`
3. Use an archiving tool (`zip`, `7zip`, `WinRAR`, etc.) to add `modrinth.index.json` to a new archive.
4. Change the file extension of the new archive to `.mrpack`
5. Create a new instance on the [Modrinth App](https://modrinth.com/app), or your launcher of choice, and import the .mrpack you just created.
6. Open the instance folder of the pack you just created in your terminal of choice.
7. Initialize a git repository in the instance folder

   ```sh
   git init
   ```

8. Add the GitHub remotes to the repository

   ```sh
   git remote add origin git@github.com:<your_username>/<repo>
   git remote add upstream git@github.com:lucent-mc/<repo>
   ```

9. Pull the `dev` branch locally

   ```sh
   git pull origin dev
   ```

10. Rename the local branch to match the remote branch

    ```sh
    git branch -m master dev
    ```

11. Set up the local branch to track the remote branch.

    ```sh
    git branch --set-upstream-to=origin/dev
    ```

12. Sync the repository one final time

```sh
git pull --all
```

In a row, that's

```sh
$USERNAME=<your_github_username>
$PROJECT=<repository_name>
git init
git remote add origin git@github.com:$USERNAME/$PROJECT
git remote add upstream git@github.com:lucent-mc/$PROJECT
git pull origin dev
git branch -m master dev
git branch --set-upstream-to=origin/dev
git pull --all
```

> [!info]- Contributing as a core maintainer  
> If you are a core maintainer (i.e. with write access to the upstream repositories), you will want to omit the steps setting up the fork on your own github account. Also omit setting up an `upstream` remote, and just work off the `origin`.
> 
> ```sh
> $PROJECT=<repository_name>
> git init
> git remote add origin git@github.com:lucent-mc/$PROJECT
> git pull origin dev
> git branch -m master dev
> git branch --set-upstream-to=origin/dev
> git pull --all
> ```

## Step 2: Create a feature branch

To keep your progress separate from what other people might be working on, and keeping the  
_"trunk"_ clean, you should create a feature branch.

You can do this with [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh), or manually. To create a feature branch manually, please use the `feat/` prefix.

```sh
git switch -C feat/<feature_name>
```

## Step 3: Make changes

Add mods, change configs, optimize keybinds. Do what you set out to do, and commit to your changes with git.

### Step 3a: Export the new `modrinth.index.json`

1. Export your pack using the Modrinth App or your launcher of choice.
2. Extract the `modrinth.index.json`.
3. Place it in the root of the repository.
4. Push your changes.

## Step 4: Make a Pull Request

When you're happy with your changes / contributions, make a Pull Request on github, and wait for reviewers or maintainers.

### Step 4a: Resolve any review requests

If a reviewer or maintainer requests any changes to your PR, address those and resolve the conversations.

## Step 5: Enjoy

Congratulations! Your changes have been accepted! Now all you'll have to do is wait for your changes to be included in a new version.
