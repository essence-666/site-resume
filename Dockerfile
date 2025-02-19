FROM essence666/resume

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
