# witch image 
FROM node

# where it will save
WORKDIR /usr/app

# copy to the new directory 
COPY package.json ./

# install dependencies
RUN npm install

COPY . . 

# route
EXPOSE 3333

# To run
CMD ["npm", "run", "dev"]


