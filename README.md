
# About

This repo contains my solutions to katas from [Codewars](https://codewars.com/).

## Caveats

- I often prefer a declarative solution rather than an efficient one, so anyone is able to read it and easily associate it to the kata description.
- Most of katas will be done in JavaScript.
- I'm taking my unsolved katas from [this search results](https://www.codewars.com/kata/search/javascript?q=&xids=completed&beta=false&order_by=published_at%20asc).

# Scaffolding script

I created a python script to scaffold directories and files for the katas. It will create a directory for the kata with a README.md file containing the kata description and an empty solution file for every programming language indicated in the arguments.

## Usage

Just invoke the script with the ID or slug of the kata you want to scaffold. You can get it from the URL of the kata. Default language is JavaScript.

The following examples of usage are equivalent:

```shell
python scaffold.py 517b2bcf8557c200b8000015
```

```shell
python scaffold.py 517b2bcf8557c200b8000015 --languages javascript
```

And they will create the following structure:

```
5 kyu/
├─ ninja-vs-samurai-attack-plus-block/
│  ├─ README.md
│  ├─ solution.js
```

Use `--languages` or `-l` to specify the programming languages you want to scaffold.

The following examples of usage are equivalent:

```shell
python scaffold.py 517b2bcf8557c200b8000015 --languages javascript ruby
```
```shell
python scaffold.py ninja-vs-samurai-attack-plus-block --languages javascript ruby
```
```shell
python scaffold.py ninja-vs-samurai-attack-plus-block -l javascript ruby
```

And they will create the following structure:

```
5 kyu/
├─ ninja-vs-samurai-attack-plus-block/
│  ├─ README.md
│  ├─ solution.js
│  ├─ solution.rb
```
