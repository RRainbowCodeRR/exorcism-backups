"""Define the expected bake time constant (in minutes)."""
EXPECTED_BAKE_TIME = 40

"""Define the constant of how much time it takes to prep a layer (in minutes)."""
PREPARATION_TIME = 2


def bake_time_remaining(arg):
    """Calculate the bake time remaining."""
    return EXPECTED_BAKE_TIME - arg

def preparation_time_in_minutes(layers):
    """Calulate the preparation time based on the amount of layers."""
    return PREPARATION_TIME * layers

def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculates the elapsed time starting from preparation."""
    prep = PREPARATION_TIME * number_of_layers
    return prep + elapsed_bake_time