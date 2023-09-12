#!/bin/bash

# Установка параметров
BUILD_BRANCH="build"
DEVELOP_BRANCH="develop"
REPO_URL="https://github.com/ghostmodd/avito-frontend-intership-2023.git"

# Создание новой сборки
npm run build

# Создание временной директории
mkdir build_repo

# Переход в новую директорию
сd build_repo

# Копирование новой сборки в репозиторий
cp -R ../build/* .

# Возвращаемся в

# Переключение на ветку "develop"
git checkout $DEVELOP_BRANCH

# Добавление изменений в индекс
git add .

# Создание коммита
git commit -m "Update build"

# Отправка изменений на ветку "develop"
git push origin $DEVELOP_BRANCH

# Возврат к директории проекта
cd ..

# Удаление временной директории репозитория
rm -rf build_repo
