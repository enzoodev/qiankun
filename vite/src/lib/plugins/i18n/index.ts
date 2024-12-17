import { createI18n } from "vue-i18n";
import { ptBr } from "./locales/pt-br";

export const i18n = createI18n({
    locale: 'pt-BR',
    messages: {
        'pt-BR': ptBr,
    },
})