# candidates-backend


It is an api that sends e-mail to the candidates according to the evaluation criteria

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Git

```bash
git clone https://github.com/guszak/candidates-backend.git
```

## Install

```bash
npm install
```

## Config

Create a `.env` file in the root directory of your project. Add
environment-specific variables on new lines in the form of `NAME=VALUE`.
For example:

```
MANDRILL_API_KEY="example"
MANDRILL_SENDER_EMAIL="example@email.com"
MANDRILL_SENDER_NAME="Name"
```

Obs: You need config your Mandrill account to get api key

## Test

```bash
npm test
```

## Usage

```bash
node server
```

