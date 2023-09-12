bash

# Установка параметров
BUILD_BRANCH="build"
DEVELOP_BRANCH="develop"
REPO_URL="https://github.com/ghostmodd/avito-frontend-intership-2023.git"


# Создание новой сборки
npm run build

# Создание временной директории
mkdir build_repo

# Переход ко временной директории
cd build_repo

# Копирование данных из build во временную директорию
cp -R ../build/* .

git checkout $BUILD_BRANCH

# Переход в ветку build
git checkout $BUILD_BRANCH

# Клонирование репозитория в отдельную директорию
git clone $REPO_URL build_repo
cd build_repo

# Переключение на ветку "develop"
git checkout $DEVELOP_BRANCH

# Копирование новой сборки в репозиторий
cp -R ../build/* .

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
