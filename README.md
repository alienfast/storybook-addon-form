# AlienFast Storybook Addon Form

### Development scripts

- `yarn start` runs tsup in watch mode and starts Storybook
- `yarn build` build and package your addon code

## Release Management

Simply commit and push, create a PR and it will create a `patch` canary release. Merge the PR and it will create a patch release. Change the label for major, minor, etc.

### Pull requests

Add an appropriate label, and it will increment the version accordingly, e.g. `major`. If nothing is set, it appears to create a `patch`
