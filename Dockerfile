FROM node:22.14.0

WORKDIR /app
# cria diretório app na imagem

COPY . .
# copia os arquivos da aplicação no app da imagem

#RUN npm install -g @angular/cli

RUN npm install
EXPOSE 4200
# CMD ["ng", "serve", "--host", "0.0.0.0"]
CMD ["nx", "serve", "shell", "--devRemotes=dashboard"]