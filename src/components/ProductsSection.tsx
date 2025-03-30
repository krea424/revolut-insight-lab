
import { useState } from "react";
import { CreditCard, Banknote, TrendingUp, Send, Building } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("cards");

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-4">Offerta di Prodotti e Servizi</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Una panoramica completa dei prodotti e servizi offerti da Revolut nel mercato italiano, sia per clienti privati che aziendali
        </p>

        <Tabs defaultValue="cards" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger 
                value="cards" 
                className={cn("data-[state=active]:bg-revolut-blue data-[state=active]:text-white", 
                  activeTab === "cards" ? "bg-revolut-blue text-white" : ""
                )}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Conti & Carte
              </TabsTrigger>
              <TabsTrigger 
                value="currency" 
                className={cn("data-[state=active]:bg-revolut-blue data-[state=active]:text-white", 
                  activeTab === "currency" ? "bg-revolut-blue text-white" : ""
                )}
              >
                <Banknote className="h-4 w-4 mr-2" />
                Cambio Valuta
              </TabsTrigger>
              <TabsTrigger 
                value="trading" 
                className={cn("data-[state=active]:bg-revolut-blue data-[state=active]:text-white", 
                  activeTab === "trading" ? "bg-revolut-blue text-white" : ""
                )}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Trading & Investimenti
              </TabsTrigger>
              <TabsTrigger 
                value="payments" 
                className={cn("data-[state=active]:bg-revolut-blue data-[state=active]:text-white", 
                  activeTab === "payments" ? "bg-revolut-blue text-white" : ""
                )}
              >
                <Send className="h-4 w-4 mr-2" />
                Pagamenti
              </TabsTrigger>
              <TabsTrigger 
                value="business" 
                className={cn("data-[state=active]:bg-revolut-blue data-[state=active]:text-white", 
                  activeTab === "business" ? "bg-revolut-blue text-white" : ""
                )}
              >
                <Building className="h-4 w-4 mr-2" />
                Business
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <TabsContent value="cards" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Conti Multivaluta</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Supporto per fino a 36 valute diverse in un unico conto</li>
                    <li>• IBAN italiano per facilitare le operazioni sul mercato locale</li>
                    <li>• Depositi diretti e bonifici bancari nazionali ed internazionali</li>
                    <li>• Visualizzazione in tempo reale delle transazioni e notifiche istantanee</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Carte Fisiche e Virtuali</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Carte di debito Mastercard e Visa per acquisti globali</li>
                    <li>• Carte virtuali per maggiore sicurezza negli acquisti online</li>
                    <li>• Possibilità di creare carte virtuali usa e getta per singole transazioni</li>
                    <li>• Controlli di sicurezza avanzati, incluso blocco/sblocco tramite app</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="currency" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Cambio Valuta</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tassi di cambio vicini a quelli interbancari per 36 valute</li>
                    <li>• Trasparenza nelle commissioni e nei tassi applicati</li>
                    <li>• Limiti di cambio senza commissioni basati sul piano di abbonamento</li>
                    <li>• Strumenti per monitorare i tassi di cambio in tempo reale</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Trasferimenti Internazionali</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Invio di denaro in oltre 150 paesi a tassi competitivi</li>
                    <li>• Stima chiara dei tempi di arrivo e delle commissioni</li>
                    <li>• Trasferimenti gratuiti tra utenti Revolut in tutto il mondo</li>
                    <li>• Supporto per bonifici SWIFT per trasferimenti internazionali</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trading" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Trading di Criptovalute</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accesso a oltre 200 criptovalute con commissioni competitive</li>
                    <li>• Revolut X: app dedicata al trading di criptovalute</li>
                    <li>• Commissioni: 0-0,49% in base al piano e al volume</li>
                    <li>• Possibilità di convertire facilmente tra criptovalute e valute fiat</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Trading di Azioni & ETF</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Accesso a oltre 2.000 azioni senza commissioni entro limiti mensili</li>
                    <li>• Piani di investimento in ETF a zero commissioni</li>
                    <li>• Investimenti in azioni frazionate per importi accessibili</li>
                    <li>• Interfaccia intuitiva adatta anche ai principianti</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="payments" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Pagamenti Peer-to-Peer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trasferimenti istantanei e gratuiti tra utenti Revolut</li>
                    <li>• Diverse modalità di invio: contatti, link, Revtag e codici QR</li>
                    <li>• Funzionalità per dividere conti e gestire spese condivise</li>
                    <li>• Possibilità di inviare denaro in qualsiasi valuta supportata</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Altri Servizi di Pagamento</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pagamenti senza contatto tramite smartphone e wearable</li>
                    <li>• Revolut Pay per pagamenti online con un clic</li>
                    <li>• Addebiti diretti e pagamenti ricorrenti</li>
                    <li>• Pagamenti di bollette e utenze direttamente dall'app</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="business" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Revolut Business</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Conti aziendali con funzionalità avanzate per la gestione finanziaria</li>
                    <li>• Carte fisiche e virtuali per il team con controlli di spesa</li>
                    <li>• Pagamenti globali in oltre 25 valute a tassi interbancari</li>
                    <li>• IBAN e coordinate SWIFT/BIC per ricevere fondi</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-revolut-navy">Strumenti Aziendali</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Automazione dei processi contabili con integrazioni software</li>
                    <li>• Approvazioni e controlli per le spese del team</li>
                    <li>• API per collegare e sincronizzare strumenti aziendali</li>
                    <li>• Revolut BillPay con riconoscimento IA per ricevute e fatture</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
