from math import log2

d = { "e": {"P": 15, "l": 2}, "r": {"P": 12, "l": 2}, "c": {"P": 11, "l": 3}, "o": {"P": 10, "l": 3}, "t": {"P": 9, "l": 3}, "l": {"P": 4, "l": 4}, "m": {"P": 2, "l": 5}, "k": {"P": 1, "l": 5} }

total = sum([i['P'] for i in d.values()])

def quantite_information(el):
    proba = el/total
    return -proba*log2(proba)

for k, v in d.items():
    v['H'] = quantite_information(v['P'])


def entropie():
    return sum([i['H'] for i in d.values()])

def redondance(bits):
    return bits - entropie()

def longueur_moyenne():
    return sum([i['l']*i['P'] for i in d.values()])/len(d)

print(f"freqences totale: {total}")
print(f"1. Entropie: {entropie()} sh/symboles")
print(f"2. Redondance (ascii 7): {redondance(7)} bits")
print(f"3. Nombre minimum de bits: {log2(len(d))} bits")
print(f"4. Redondance (nombre minimum de bits): {redondance(3)} bits")
print(f"7. Longueur moyenne: {longueur_moyenne()} bits")



# quantite_information(12, d["e"])

