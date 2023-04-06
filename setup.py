from setuptools import setup, find_packages

with open("README.md") as file:
    read_me_description = file.read()

with open('requirements.txt') as file:
    required = file.read().splitlines()

setup(
    name='moscow-postamats-map',
    version='0.1.3',
    packages=find_packages(),
    author="Pashkova Volkov Bratushka",
    author_email="email@example.com",
    description="WEB-сервис с картой для нахождения наиболее оптимального места для размещения постамата.",
    long_description=read_me_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Angel367/moscow-postamats-map/",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    requires=[
        "Django"
    ],
    python_requires='>=3.9',
)

