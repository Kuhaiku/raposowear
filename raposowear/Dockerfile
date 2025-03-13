# Usando a imagem oficial do Nginx
FROM nginx:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/share/nginx/html

# Copia todos os arquivos da pasta atual (onde o Dockerfile está) para o diretório de trabalho do contêiner
COPY . .

# Exponha a porta 80 para acesso ao servidor
EXPOSE 80
