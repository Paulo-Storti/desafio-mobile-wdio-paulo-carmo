<p align="center">
<img src="https://img.shields.io/badge/Node.js-20%2B-green?logo=node.js&logoColor=white" alt="Node.js">
<img src="https://img.shields.io/badge/WebdriverIO-v8-red?logo=webdriverio&logoColor=white" alt="WebdriverIO">
<img src="https://img.shields.io/badge/Appium-2.x-blueviolet?logo=appium&logoColor=white" alt="Appium">
<img src="https://img.shields.io/badge/Mocha-Testing-orange?logo=mocha&logoColor=white" alt="Mocha">
<img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=flat-square">
<img src="https://img.shields.io/badge/Cobertura-100%25-success?style=flat-square">
<img src="https://img.shields.io/badge/Lint-ESLint-blue?logo=eslint&style=flat-square">
<img src="https://img.shields.io/badge/Allure-Reporting-yellow?logo=allure&logoColor=white" alt="Allure">
<img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-lightgrey?logo=android&logoColor=white" alt="Platform">
<img src="https://img.shields.io/badge/Jenkins-CI%2FCD-blue?logo=jenkins&logoColor=white" alt="Jenkins">
<img src="https://img.shields.io/badge/Build-Passing-success?logo=githubactions&logoColor=white" alt="Build Passing">

</p>

# 📱 Desafio Mobile WebdriverIO - Paulo Carmo

## 📚 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Design Pattern](#-design-pattern)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Execução dos Testes](#-executar-testes-locais)
- [Geração de Relatórios](#-geração-do-relatório-allure)
- [Integração Jenkins](#integração-jenkins)
- [Evidências](#-evidências)
- [Flexibilidade iOS](#-flexibilidade-ios-framework-preparado)
- [Autor](#-autor)


## 🧩 Sobre o Projeto
Este projeto foi desenvolvido como parte do desafio de automação mobile, com o objetivo de demonstrar conhecimentos em automação de testes utilizando **WebdriverIO**, **Appium** e **Jenkins**.  
O app testado é o **Wdio Native Demo App (Android)**, disponível em:  
🔗 [https://github.com/webdriverio/native-demo-app/releases](https://github.com/webdriverio/native-demo-app/releases)


## 🚀 Tecnologias Utilizadas

- **JavaScript / Node.js**
- **WebdriverIO v8**
- **Appium**
- **Mocha**
- **Allure Reporter**
- **Git / GitHub**
- **Visual Studio Code**
- **Jenkins**

---

## 🧱 Estrutura do Projeto

```bash
📦 desafio-mobile-wdio-paulo-carmo
├── 📁 allure-report
├── 📁 allure-results
├── 📁 app
│   ├── 📁 android
│   ├── 📁 ios 
├── 📁 reports               # Evidências utilizando o html nice reporter
│   ├── 📁 html-reports
│   ├── 📁 html-reportsscreenshots
│   ├── 📁 screenshots
├── 📁 test
│   ├── 📁 data
│   ├── 📁 helpers
│   ├── 📁 pageobjects       # Padrão Page Object / Factory
│   └── 📁 specs             # Casos de teste automatizados
├── wdio.conf.js             # Configuração principal do WebdriverIO
├── package.json             # Dependências e scripts
└── README.md
```
---

## 🧠 Design Pattern

O projeto segue o padrão **Page Object / Factory**, garantindo:
- Separação de responsabilidades entre **elementos** e **ações**;
- **Reutilização** de código entre testes;
- Facilidade de **manutenção** e **expansão** para novas plataformas (Android/iOS).

Exemplo de estrutura:
```js
// login.page.js
class LoginPage {
    get btnMenuLogin() {
        return $('~Login')
    }
    get titleLogin() {
        return $('//android.widget.TextView[@text="Login / Sign up Form"]')
    }
    get btnLoginSession() {
        return $('(//android.widget.TextView[@text="Login"])[1]')
    }
}

export default new LoginPage();
```

---

## 📲 Configuração do Ambiente

### 1️⃣ Requisitos
- Node.js 20
- Appium Server (2.x)
- Android SDK configurado
- Java JDK 21
- Variáveis de ambiente configuradas:  
  `ANDROID_HOME`, `JAVA_HOME`, `PATH`

### 2️⃣ Instalação
```bash
npm install
```

### 3️⃣ Executar Testes Locais
```bash
npm test
```

Os testes serão executados no emulador Android configurado e gerarão:
- Evidências em `/reports`
- Relatório Allure em `/allure-report`

---

## 🧾 Geração do Relatório Allure

Após a execução dos testes, gere o relatório Allure com:
```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

O relatório exibirá métricas, evidências (prints) e detalhes de execução.

---

## 🧰 Configuração do Emulador Android (Pixel 8)

Para executar os testes localmente, é necessário configurar um emulador Android no Android Studio.
Abaixo estão as instruções completas para criar um emulador Pixel 8 compatível com o Appium.

### 1️⃣ Instalar o Android Studio

Baixe e instale a versão mais recente do Android Studio
.

Durante a instalação, marque as opções:

* Android SDK

* Android SDK Platform

* Android Virtual Device (AVD)

* Android SDK Command-line Tools

### 2️⃣ Configurar o SDK e as Plataformas

Após abrir o Android Studio:

1. Vá em:
```
File ▸ Settings ▸ Appearance & Behavior ▸ System Settings ▸ Android SDK
```
2. Na aba SDK Platforms, marque:
```
Android 14 (Upside Down Cake)
```

3. Na aba SDK Tools, marque:
```
✅ Android SDK Build-Tools

✅ Android Emulator

✅ Android SDK Platform-Tools

✅ Android SDK Command-line Tools

✅ Clique em Apply e aguarde o download.
```

### 3️⃣ Criar o Emulador Pixel 8

Vá em 
```
Tools ▸ Device Manager
```

Clique em
```
Create Device
```
Escolha:
```
Category: Phone
Device: Pixel 8
```

Clique em 
```
Next
```

Escolha uma imagem de sistema:
```
Recomendado: Android 14 – Google APIs x86_64
```
Clique em 
```
Next ▸ Finish
```

### 4️⃣ Iniciar o Emulador

No Device Manager, clique no botão ▶️ Play para iniciar o emulador.
Aguarde até que o sistema seja carregado completamente.

Verifique se o dispositivo foi detectado pelo ADB:
```
adb devices
```

A saída deve ser algo como:
```
List of devices attached
emulator-5554	device
```

### 5️⃣ Iniciar o Appium

Abrir um novo terminal no Visual Studio Code e enviar:

```
appium -p 1991
```

### 6️⃣ Abrir mais um terminal no Visual Studio Code

Caso não tenha instalado previamente:

```
npm install 
```

Iniciar testes:

```
npm test
```

## 💡 Dica Extra — Variáveis de Ambiente Necessárias

Certifique-se de que o sistema reconheça as variáveis abaixo:
```
_____________________________________________________________________
| Variável      | Caminho (exemplo Windows)                         |
|---------------|---------------------------------------------------|
| JAVA_HOME     | C:\Program Files\Java\jdk-21                      |
|---------------|---------------------------------------------------|
| ANDROID_HOME  | C:\Users\<seu_usuario>\AppData\Local\Android\Sdk  |
|---------------|---------------------------------------------------|
| PATH          | %ANDROID_HOME%\platform-tools                     |
|               | %ANDROID_HOME%\emulator                           |
|               | %JAVA_HOME%\bin                                   |
⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻
```

Verifique com:
```
echo %JAVA_HOME%
echo %ANDROID_HOME%
```

## ⚙️ Integração Jenkins <a id="integração-jenkins"></a>

O projeto está configurado para execução automatizada no **Jenkins local**.

### 🧩 Passos da Integração
1. Criar um novo **Job Freestyle** no Jenkins;
2. Configurar o **repositório GitHub**:
   ```
   https://github.com/Paulo-Storti/desafio-mobile-wdio-paulo-carmo
   ```
3. Em **Build Steps**, adicione:
   ```bash
   npm install
   npm test
   allure generate --clean -o allure-report
   ```

 ✅ Após o build, o Jenkins exibirá o relatório Allure diretamente na interface web.

---

## 🎥 Execução no Jenkins (CI/CD)
Veja abaixo a execução automatizada da pipeline no Jenkins local:

<p>
  <a align="left" href="https://www.youtube.com/watch?v=AcQtbc_NsQw">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/YouTube_full-color_icon_%282024%29.svg/2560px-YouTube_full-color_icon_%282024%29.svg.png" width="120" alt="Jenkins Pipeline"/>
  </a>
</p>


## 📸 Evidências

Durante a execução, o framework captura **prints automáticos** ao final de cada teste (pass/fail), armazenados no diretório `reports/`.

Essas evidências também aparecem anexadas dentro do **Allure Report**.

---

## 📱 Flexibilidade iOS (Framework Preparado)

Mesmo que os testes principais sejam para Android, o framework foi configurado para permitir execução em iOS futuramente:

```js
const isIOS = process.env.PLATFORM === 'ios'

const appPath = isIOS
  ? './app/ios/ios.wdio.native.app.v1.0.8.app'
  : './app/android/android.wdio.native.app.v1.0.8.apk'

export const config = {
    runner: 'local',
    port: 1991,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,

    capabilities: [{
        platformName: isIOS ? 'iOS' : 'Android',
        'appium:deviceName': isIOS ? 'iPhone 14' : 'emulator-5554',
        'appium:automationName': isIOS ? 'XCUITest' : 'UiAutomator2',
        'appium:app': path.resolve(appPath),
    }],
```

## ✨ Autor

👤 [Paulo Storti](https://www.linkedin.com/in/paulo-storti)  
📧 [GitHub - Paulo-Storti](https://github.com/Paulo-Storti)