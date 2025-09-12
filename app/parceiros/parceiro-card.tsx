import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { parceiros } from "../dataparceiros/parceiros";
import type { Parceiro } from "../dataparceiros/parceiros";


    interface ParceiroCardProps {
        parceiro: Parceiro;
    }
    export default function ParceirosCard({parceiro}: ParceiroCardProps) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
                <div>

                    {/* Nome e categoria */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg text-balance">{parceiro.nome}</h3>
                        <Badge variant="secondary" className="text-xs">
                            {parceiro.nome || 'Categoria não especificada'}
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}