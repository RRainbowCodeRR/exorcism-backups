"""Functions to prevent a nuclear meltdown."""


def is_criticality_balanced(temperature, neutrons_emitted):
    """Verify criticality is balanced."""
    if temperature < 800 and neutrons_emitted > 500 and (temperature * neutrons_emitted) < 500000:
        return True
    else:
        return False

def reactor_efficiency(voltage, current, theoretical_max_power):
    """Assess reactor efficiency zone."""
    efficiency = voltage * current / theoretical_max_power * 100

    if efficiency >= 80:
        return 'green'
    elif efficiency >= 60:
        return 'orange'
    elif efficiency >= 30:
        return 'red'
    else: 
        return 'black'

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    """Assess and return status code for the reactor."""
    criticality = temperature * neutrons_produced_per_second

    low_threshold = .9 * threshold
    high_threshold = 1.1 * threshold

    if criticality < low_threshold:
        return 'LOW'

    elif low_threshold <= criticality <= high_threshold:
        return 'NORMAL'

    else:
        return 'DANGER'
    