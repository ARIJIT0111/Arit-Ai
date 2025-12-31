// API configuration constants for OpenRouter Integration

export const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Default header sent with every API request
export const fallbackHeaders = {
    'Content-Type': 'application/json',
    'X-Titke': 'Arit Model', //application identifier for operators
}

//maximum number of characters allowed in file attachments to avoid API limits
export const MAX_FILE_CHARSn =120000