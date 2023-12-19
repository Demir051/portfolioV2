# Portföy Web Sitesi

Bu proje, kendi portföy web sitenizi oluşturmanıza yardımcı olacak basit bir Express.js uygulamasıdır. Bu uygulama, kişisel bilgilerinizi, deneyimlerinizi, projelerinizi ve iletişim bilgilerinizi gösteren bir web sitesi oluşturmanıza olanak tanır.

## Başlarken

1. Bu depoyu bilgisayarınıza klonlayın:

    ```bash
    git clone https://github.com/Demir051/portfolioV2.git
    ```

2. Proje dizinine gidin:

    ```bash
    cd portfolioV2
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

4. `.env` dosyası oluşturun ve GitHub token'ınızı ve diğer çevresel değişkenleri ekleyin.

5. Uygulamayı başlatın:

    ```bash
    npm start
    ```

6. Tarayıcınızda [http://localhost:3100](http://localhost:3100) adresine gidin.

## Proje Yapısı

- `views`: Express.js kullanarak oluşturulmuş HTML şablonları.
- `public`: Stil dosyaları, resimler ve diğer istemci tarafı dosyaları.
- `routes`: Sayfa yönlendirmeleri ve API çağrıları için route dosyaları.

## Kullanılan Teknolojiler

- Express.js
- EJS (Embedded JavaScript) şablon motoru
- CSS
- Node.js

## Kullanılan Api

- Github API 
