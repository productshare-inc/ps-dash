# COMPLETE SAAS BOILERPLATE CODE

## Starting Locally

```bash
git clone https://github.com/anoopkarnik/turborepo-saas-boilerplate-code.git
cd turborepo-saas-boilerplate-code
npm install

sudo docker network create turborepo-network
sudo docker-compose -f docker/docker-compose-tools.yml up -d
sudo sh scripts/copy-env-files.sh
```
Fill the .env in apps/nextjs-app 

```bash
npm run db:migrate
npm run db:generate
npm run dev
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
