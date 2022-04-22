#!/usr/bin/python3

from requests.exceptions import HTTPError
import sys
import requests
import json
import os
import argparse

language_extensions = {
	'javascript': 'js',
	'python': 'py',
	'ruby': 'rb',
}

example_usage = '''example:

 python scaffold.py 517b2bcf8557c200b8000015
 python scaffold.py 517b2bcf8557c200b8000015 --languages javascript
 python scaffold.py 517b2bcf8557c200b8000015 --languages javascript ruby
 python scaffold.py ninja-vs-samurai-attack-plus-block --languages javascript ruby
 python scaffold.py ninja-vs-samurai-attack-plus-block -l javascript ruby'''

class RawTextAndArgumentDefaultHelpFormatter(argparse.RawTextHelpFormatter, argparse.ArgumentDefaultsHelpFormatter):
	pass

def get_args_parser():
	supported_languages = list(language_extensions.keys())

	parser = argparse.ArgumentParser(
		description='Scaffold kata',
		epilog=example_usage,
		formatter_class=RawTextAndArgumentDefaultHelpFormatter
	)

	parser.add_argument(
		'kata_id',
		type=str,
		help='Kata ID or slug'
	)
	parser.add_argument(
		'--languages',
		'-l',
		nargs='*',
		help='Languages to scaffold',
		choices=supported_languages,
		default=supported_languages[0:1]
	)

	return parser

if __name__ == '__main__':
	parser = get_args_parser()
	args=parser.parse_args()

	if len(args.languages) == 0:
		print('At least one language must be specified with --languages or -l')
		sys.exit(1)

	kata_id = args.kata_id

	try:
		response = requests.get(f'https://www.codewars.com/api/v1/code-challenges/{kata_id}')
		response.raise_for_status()
	except HTTPError:
		print(f'Unable to found a kata with id {kata_id}.')
		exit(1)

	json_response = response.json()
	kata_name = json_response['name']
	kata_slug = json_response['slug']
	kata_rank_name = json_response['rank']['name']
	kata_description = json_response['description']

	if kata_rank_name is None:
		print(f'Error: Kata {kata_name} is not ranked.')
		exit(1)

	# Create a directory for the kata
	kata_dir = f'{kata_rank_name}/{kata_slug}'
	
	os.makedirs(kata_dir, exist_ok=True)

	# Create empty solution file for each language
	for language in args.languages:
		extension = language_extensions[language]
		filename = f'{kata_dir}/solution.{extension}'

		# Don't overwrite if the solution file already exists
		if os.path.exists(filename):
			print(f'There is already a solution file for {language}. Skipping.')
			continue

		open(filename, 'a').close()

	# Create README.md with kata instructions if it doesn't exist
	readme_filename = f'{kata_dir}/README.md'
	if not os.path.exists(readme_filename):
		file = open(readme_filename, mode='w')
		file.write(f'# {kata_name}\n\n{kata_description}')
		file.close()

	print(f'Scaffolded {kata_name}')
