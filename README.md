
# Demonstration for symfony unit test with github workflow
- This application will demonstrate, symfony unit test with mysql databases and github work flow
   - Work flow configurations are in 
        [a relative link](.github/workflows/docker-image-unitest.yml)
## Technologies 

Technologies : 
- PHP
- Symfony Framework
- Doctrine
- Api Platform
- Doctrine ORM
- React JS

## Install Pacakges
- ./exec 'composer install'

## Database
-  Create/Update tables
    - ./exec 'bin/console doctrine:migrations:migrate'
-  Load Data fixture
    -  ./exec 'bin/console doctrine:fixtures:load'