from argparse import ArgumentParser

def add_arguments(parser):
    parser.add_argument("-m", "--maxdepth", help="Sets the max recusrion depth", type=int, default=-1)
    parser.add_argument("-d", "--directory", help="The directory to scan", type=str)
    parser.add_argument("-pf", "--printfile", help="Prints the path of every file", action="store_true")
    parser.add_argument("-pd", "--printdirectory", help="Prints the path of every directory", action="store_true")
    parser.add_argument("-pt", "--printtree", help="Prints directory tree. --save must also have been used", action="store_true")
    parser.add_argument("-a", "--all", help="Scans all directories, even those in the ingore list", action="store_true")
    parser.add_argument("-s", "--save", help="Save results to file", action="store_true")


def get_arguments() -> ArgumentParser:
    parser = ArgumentParser()

    add_arguments(parser)

    return parser.parse_args()