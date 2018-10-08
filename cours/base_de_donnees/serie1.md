---
title: Série 1
date: 2018-10-07
author: sol
sidebar: auto
---

## 1. Montrer les noms des fournisseurs qui n'ont pas de fax.

```SQL
select contactname from supplier where fax isnull;
```

## 2. Montrer les produits dont le prix est inférieur à 10.

```SQL
select productname from product where unitprice < 10;
```

## 3. Algèbre relationnelle
$OldCustomer := \theta_{id<20}(Customer)$

```SQL
select firstname as OldCustomer from customer where id < 20;
```

$Cities := \pi_{city}(OldCustomer)$

```SQL
select city as City from customer where id < 20;
```
```
 Berlin
 México D.F.
 México D.F.
 London
 Luleå
 Mannheim
 Strasbourg
 Madrid
 Marseille
 Tsawassen
 London
 Buenos Aires
 México D.F.
 Bern
 Sao Paulo
 London
 Aachen
 Nantes
 London
```

## 4. German supplier

$GermanSupplier := \theta_{country='Germany'}(Supplier)$

```SQL
select contactname as GermanSupplier from exe1.supplier where country = 'Germany';
```

$GermanContacts := \pi_{city, contactname}(GermanSupplier)$

```SQL
select city, contactname from exe1.supplier where country = 'Germany';
```

```
   city    |  contactname  
-----------+---------------
 Berlin    | Petra Winkler
 Frankfurt | Martin Bein
 Cuxhaven  | Sven Petersen
```

## 5. Like

Trouver les noms de fournisseurs, excepté ceux qui ont le préfixe (313) dans leur fax.

```SQL
select contactname from supplier where fax not like '%313%';
```