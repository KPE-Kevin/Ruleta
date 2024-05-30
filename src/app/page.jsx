
import Header from '@/Components/Header'
import ContainerRuleta from '@/Components/ContainerRuleta'


async function Request() {
    const data = await fetch('http://localhost:3000/api/data')
    .then(result=>result.json())
    .then(data=>data);
    return data;
}


async function Page() {
  const data = await Request();
  return ( <>
    <Header />
    <ContainerRuleta info={data}/>
  </> );
} 

export default Page;