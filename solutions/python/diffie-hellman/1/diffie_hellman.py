import random

def private_key(p):
    private = random.randint(2, p -1)
    return private


def public_key(p, g, private):
    public = g ** private % p
    return public


def secret(p, public, private):
    return public ** private % p
