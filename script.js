// Consulta de CEP e validação do formulário acadêmico.
const cep = document.querySelector('#cep');
const botaoBuscar = document.querySelector('#buscar');
const statusCep = document.querySelector('#status-cep');
const camposEndereco = ['rua', 'bairro', 'cidade', 'uf'];
let consultaAtual = 0;
function limparEndereco() {
  camposEndereco.forEach(id => { document.getElementById(id).value = ''; });
}
cep.addEventListener('input', () => {
  consultaAtual++;
  limparEndereco();
  statusCep.textContent = '';
  document.querySelector('#resultado').textContent = '';
});
botaoBuscar.addEventListener('click', async () => {
  const numeroCep = cep.value.replace(/\D/g, '');
  limparEndereco();
  if (!/^\d{8}$/.test(numeroCep)) {
    statusCep.textContent = 'Digite um CEP com 8 números.';
    cep.focus();
    return;
  }
  const idConsulta = ++consultaAtual;
  botaoBuscar.disabled = true;
  statusCep.textContent = 'Consultando endereço…';
  const controle = new AbortController();
  const tempo = setTimeout(() => controle.abort(), 10000);
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${numeroCep}/json/`, { signal: controle.signal });
    if (!resposta.ok) throw new Error('Falha na consulta');
    const dados = await resposta.json();
    if (idConsulta !== consultaAtual) return;
    if (dados.erro) {
      statusCep.textContent = 'CEP não encontrado. Confira os números e tente novamente.';
      return;
    }
    document.querySelector('#rua').value = dados.logradouro || '';
    document.querySelector('#bairro').value = dados.bairro || '';
    document.querySelector('#cidade').value = dados.localidade || '';
    document.querySelector('#uf').value = dados.uf || '';
    statusCep.textContent = 'Endereço consultado. Confira os dados e complete o número e os campos que estiverem vazios.';
  } catch (erro) {
    if (idConsulta === consultaAtual) statusCep.textContent = 'Não foi possível consultar o CEP. Tente novamente ou preencha o endereço manualmente.';
  } finally {
    clearTimeout(tempo);
    botaoBuscar.disabled = false;
  }
});
const formulario = document.querySelector('#formulario');
formulario.addEventListener('input', () => { document.querySelector('#resultado').textContent = ''; });
formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  document.querySelector('#resultado').textContent = 'Teste concluído: os campos obrigatórios foram preenchidos. Nenhuma mensagem foi enviada ou armazenada.';
});
