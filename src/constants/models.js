// model configuration constants for available ai models on OpenRouter



//available AI models with their OpenRouter
//all models free tier options
export const MODELS =[
    {id:'nex-agi/deepseek-v3.1-nex-n1:free', label:'DeepSeek V3.1 Nex N1', shortLabel:'DeepSeek'},

    {id:'mistralai/devstral-2512:free', label:'DEvstral 2', shortLabel:'Devstral 2'},

    {id:'nvidia/nemotron-3-nano-30b-a3b:free', label:'NEmotron-3', shortlabel:'Nemotron 3'},

    {id:'google/gemini-2.0-flash-exp:free', label:'Gemini 2.0 flash', shortlabel:'Gemini 2.0'},

    {id:'meta-llama/llama-3.3-70b-instruct:free', label:' meta-llama-3.3-70b', shortlabel:'llama'},

    {id:'google/gemma-3n-e4b-it:free', label:'gemma-3n-e4b', shortlabel:'Gemma'},

    {id:'kwaipilot/kat-coder-pro:free',label:'kat-coder-pro', shortlabel:'kwaipilot'},

    {id:'qwen/qwen3-4b:free', label:'qwen3-4b', shortLabel:'Qwen'},

    {id:'nousresearch/hermes-3-llama-3.1-405b:free', label:'hermes-3-llama-3.1-405b', shortlabel:'Nous:Hermes'},

    {id:'tngtech/deepseek-r1t2-chimera:free',label:'deepseek-r1t2-chimera', shortLabel:'DeepSeek R1T2'},

    {id:'amazon/nova-2-lite-v1:free', label:'Amazon Nova 2 lite', shortLabel:'Nova 2 Lite'}
]

//Set of model IDs that support vision/image analyis capabilities
export const VISON_MODEL_IDS = new Set(['amazon/nova-2-lite-v1:free', 'nvidia/nemotron-3-nano-30b-a3b:free'])

//model id for Nova that supports filr attachments
export const NOVA_FILE_MODEL_ID = 'amazon/nova-2-lite-v1:free'